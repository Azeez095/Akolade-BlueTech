import axios from "axios";

export const fetchSupplier = (params) => axios.get(process.env.REACT_APP_BASE_URL + '/products/public/catalog', {params})