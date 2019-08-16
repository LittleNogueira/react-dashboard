import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = {
    notify: (method,msg) => {
        method = toast[method];
        method(msg);
    }
}

export default ToastNotification;