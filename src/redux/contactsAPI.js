import axios from "axios";

axios.defaults.baseURL = 'https://649179752f2c7ee6c2c847e2.mockapi.io';

export const fetchContacts = async () => {
    const { data } = await axios.get('/contacts');
    return data;
};

export const addContact = async contacts => {
    const { data } = await axios.post('/contacts', contacts);
    return data;
};

export const deleteContact = async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
};