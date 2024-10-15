// store.js
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      items: [] // State to hold items
    };
  },
  getters: {
    allItems(state) {
      return state.items; // Getter to access items
    }
  },
  actions: {
    fetchItems({ commit }) {
      // Mock fetching items (you can replace this with an API call)
      const mockItems = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
      ];
      commit('setItems', mockItems);
    },
    addItem({ commit }, newItem) {
      // Mock adding item (you can replace this with an API call)
      const newId = Math.max(...this.state.items.map(item => item.id), 0) + 1; // Generate new ID
      commit('addItem', { id: newId, ...newItem }); // Keep the structure intact, adding ID
    },
    editItem({ commit }, updatedItem) {
      // Edit item
      commit('editItem', updatedItem);
    },
    deleteItem({ commit }, itemId) {
      // Delete item
      commit('deleteItem', itemId);
    }
  },
  mutations: {
    setItems(state, items) {
      state.items = items; // Mutation to set items
    },
    addItem(state, newItem) {
      state.items.push(newItem); // Mutation to add a new item
    },
    editItem(state, updatedItem) {
      const index = state.items.findIndex(item => item.id === updatedItem.id);
      if (index !== -1) {
        // Update the item in the state
        state.items.splice(index, 1, updatedItem);
      }
    },
    deleteItem(state, itemId) {
      // Remove the item from the state
      state.items = state.items.filter(item => item.id !== itemId);
    }
  }
});

export default store;
