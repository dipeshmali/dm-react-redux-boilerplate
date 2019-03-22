import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successMsg = (msg) =>{
    console.log('Sucess MSH')
    toast.success(msg, {
        position: toast.POSITION.TOP_RIGHT
      });
}

export const errorMsg = (msg) =>{
    toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT
      });
}