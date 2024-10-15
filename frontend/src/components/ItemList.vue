<template>
    <div class="item-list">
      <h1>Item List</h1>
      <div class="input-container">
        <input
          v-model="newItem"
          placeholder="Add new item"
          class="item-input"
        />
        <button @click="handleAddItem" class="add-button">Add Item</button>
      </div>
      <ul class="item-container">
        <li v-for="item in allItems" :key="item.id" class="item">
          <span class="item-name">{{ item.name }}</span>
          <div class="button-group">
            <button @click="handleEditItem(item)" class="edit-button">Edit</button>
            <button @click="handleDeleteItem(item.id)" class="delete-button">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newItem: '',
        editMode: false,
        itemToEdit: null
      };
    },
    computed: {
      ...mapGetters(['allItems']),
    },
    methods: {
      ...mapActions(['fetchItems', 'addItem', 'editItem', 'deleteItem']),
      handleAddItem() {
        if (this.newItem) {
          if (this.editMode && this.itemToEdit) {
            this.editItem({ id: this.itemToEdit.id, name: this.newItem });
            this.editMode = false;
            this.itemToEdit = null;
          } else {
            this.addItem({ name: this.newItem });
          }
          this.newItem = '';
        }
      },
      handleEditItem(item) {
        this.newItem = item.name;
        this.editMode = true;
        this.itemToEdit = item;
      },
      handleDeleteItem(itemId) {
        this.deleteItem(itemId);
      }
    },
    created() {
      this.fetchItems();
    }
  };
  </script>
  
  <style scoped>
  .item-list {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  h1 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .input-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .item-input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 70%;
    margin-right: 10px;
    font-size: 16px;
  }
  
  .add-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #28a745;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .add-button:hover {
    background-color: #218838;
  }
  
  .item-container {
    list-style-type: none;
    padding: 0;
  }
  
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .item-name {
    flex-grow: 1;
    font-size: 18px;
    color: #333;
  }
  
  .button-group {
    display: flex;
  }
  
  .edit-button,
  .delete-button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .edit-button {
    background-color: #ffc107;
    color: #fff;
    margin-right: 5px;
  }
  
  .edit-button:hover {
    background-color: #e0a800;
  }
  
  .delete-button {
    background-color: #dc3545;
    color: #fff;
  }
  
  .delete-button:hover {
    background-color: #c82333;
  }
  </style>
  