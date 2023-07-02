import React from 'react';
import { Toast, ToastHeader, ToastBody } from 'reactstrap';

const ToastAlert = ({ icon, title, message, isOpen }) => {

    return (
        <Toast
            isOpen={isOpen}
            autohide
            autohideTimeout={3000}
            className="position-fixed bottom-0 end-0 m-3">
            <ToastHeader icon={icon}>
                {title}
            </ToastHeader>
            <ToastBody>
                {message}
            </ToastBody>
        </Toast>
    );
}

export default ToastAlert;