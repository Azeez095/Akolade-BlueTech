import axios from "axios";

export const fetchSupplier = (params) => axios.get('http://3.88.1.181:8000/products/public/catalog', {params}).then((response) => response.data)