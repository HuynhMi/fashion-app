import { Message } from "react-hook-form";
import toast from "react-hot-toast";

export type Cookie = {
    name: string,
    value: string
}
// export const setCookie = ({ name, value }: Cookie) => setCookie

export const notify = (message: Message, type: 'success' | 'blank' | 'error') => {
    switch (type) {
        case 'success':
            return toast.success(message);
        case 'blank':
            return toast(message);
        case 'error':
            return toast.error(message);
    }
};