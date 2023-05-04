import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: "TODO List",
        addTodo: "Add Todo",
        editTodo: "Edit Todo",
        deleteTodo: "Delete Todo",
        saveTodo: "Save",
        cancel: "Cancel",
        todoName: "Todo Name",
        required: "This field is required",
        addNew: "Add New",
        deleteAll: "Delete All",
        delete: "delete",
        edit: "edit",
      },
    },
  },
});

export default i18n;
