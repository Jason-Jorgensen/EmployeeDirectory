import axios from "axios";

export default {
    getRandomPerson: function() {
        return axios.get("https://randomuser.me/api/?results=40&nat=us");
    }
};