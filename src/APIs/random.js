import Axios from "axios";

const randomUser = {
    getUsers: async () => {
        try {
            const response = await Axios.get(
              "https://randomuser.me/api/?results=100"
            );
            return response.data.results;
          } catch (error) {
            return error;
          }
    }
}

export default randomUser