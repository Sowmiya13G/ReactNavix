import { createSlice } from '@reduxjs/toolkit';

export const formDataSlice = createSlice({
  name: 'formData',
  initialState: {
    profiles: [],
    progress: 0,
    photo: '',
    familyTree: [{ id: 'root', children: [] }],
  },
  reducers: {

    addUserProfile: (state, action) => {
      const newProfile = action.payload;
      const individualProgress = calculateProgress(newProfile);

      state.profiles.push({
        ...newProfile,
        progress: individualProgress,
      });
      const parentId = newProfile.parentId || "root"; 
      const rootNode = findNodeById(state.familyTree[0], parentId);
      const updatedFamilyTree = addNodeToTree([...state.familyTree], newProfile, parentId);
      state.familyTree = updatedFamilyTree;

      if (rootNode) {
        if (!rootNode.children) {
          rootNode.children = [];
        }

        const newFamilyMember = {
          ...newProfile,
          children: [],
          progress: individualProgress,
        };

        rootNode.children.push(newFamilyMember);
        state.familyTree.push(newFamilyMember);
      } else {
        console.error('Parent node not found in the family tree.');
        console.error('New profile/........:', newProfile);
        console.error('Current family tree..........:', state.familyTree);
      }

      const totalFields = Object.keys(newProfile).length;
      const filledFields = Object.keys(newProfile).reduce((count, key) => {
        if (key !== 'progress' && newProfile[key] !== '') {
          return count + 1;
        }
        return count;
      }, 0);
      state.progress = (filledFields / totalFields) * 100;
    },


    setFormData: (state, action) => {
      const { key, value } = action.payload;
      if (key && key.includes('.')) {
        const keys = key.split('.');
        let currentState = state;

        for (let i = 0; i < keys.length - 1; i++) {
          currentState = currentState[keys[i]];
        }

        currentState[keys[keys.length - 1]] = value;
      } else {
        state[key] = value;
      }
    },
    updatePhoto: (state, action) => {
      state.photo = action.payload.uri;
    },
    deleteUserProfile: (state, action) => {
      const indexToDelete = action.payload;
      const deletedProfile = state.profiles[indexToDelete];
      state.profiles.splice(indexToDelete, 1);
      state.familyTree = removeProfileFromTree([...state.familyTree], deletedProfile.id);
    },
    updateUserProfile: (state, action) => {
      const updatedProfile = action.payload;
      const indexToUpdate = state.profiles.findIndex(profile => profile.id === updatedProfile.id);

      if (indexToUpdate !== -1) {
        state.profiles[indexToUpdate] = updatedProfile;
      } else {
        console.error('Profile to update not found.');
      }
    },

    initializeFamilyTree: (state, action) => {
      const profiles = action.payload;
      
      const rootFamilyTree = { id: 'root', children: [] };

      const addProfilesToTree = (tree, parentId) => {
        const familyMembers = profiles.filter((profile) => profile.parentId === parentId);

        for (const member of familyMembers) {
          const newNode = { ...member, children: [] };
          tree.children.push(newNode);
          addProfilesToTree(newNode, member.id);
        }
      };

      addProfilesToTree(rootFamilyTree, null);

      state.familyTree = [rootFamilyTree];
    },
  },
});

export const {
  addUserProfile,
  setFormData,
  initialState,
  updatePhoto,
  deleteUserProfile,
  updateUserProfile,
  initializeFamilyTree
} = formDataSlice.actions;
export const selectFormData = (state) => state.formData;
export default formDataSlice.reducer;


const findNodeById = (node, id) => {
  if (node.id === id) {
    return node;
  }
  for (const child of node.children) {
    const foundNode = findNodeById(child, id);
    if (foundNode) {
      return foundNode;
    }
  }

  return null;
};
const calculateProgress = (profile) => {
  const totalFields = Object.keys(profile).length;
  const filledFields = Object.keys(profile).reduce((count, key) => {
    if (key !== 'progress' && profile[key] !== '') {
      return count + 1;
    }
    return count;
  }, 0);
  return (filledFields / totalFields) * 100;
};
const addNodeToTree = (tree, newNode, parentId) => {
  const updatedTree = JSON.parse(JSON.stringify(tree));

  const traverseAndAdd = (node) => {
    if (node.id === parentId) {
      node.children = [...(node.children || []), { ...newNode, children: [] }];
      return node;
    }

    node.children = (node.children || []).map((child) => traverseAndAdd(child));
    return node;
  };

  updatedTree[0] = traverseAndAdd(updatedTree[0]);

  return updatedTree;
};
const removeProfileFromTree = (tree, profileId) => {
  const updatedTree = JSON.parse(JSON.stringify(tree));

  const traverseAndRemove = (node) => {
    if (node.id === profileId) {
      return null;
    }
    node.children = node.children
      .map((child) => traverseAndRemove(child))
      .filter((child) => child !== null);

    return node;
  };

  updatedTree[0] = traverseAndRemove(updatedTree[0]);

  return updatedTree;
};