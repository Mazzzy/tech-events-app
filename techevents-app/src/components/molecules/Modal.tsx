import React, { FC } from "react";

interface ModalProps {
    title?: string;
    children?: any;
    okClick?: any;
    cancelClick?: any;
}

const Modal: FC<ModalProps> = ({ title, children, okClick, cancelClick }) => {
    return (
        <div className="modal is-active">
            <div className="modal-background" onClick={cancelClick} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button className="delete" onClick={cancelClick} />
                </header>
                <section className="modal-card-body">
                    <div className="content">{children}</div>
                </section>
                <footer className="modal-card-foot">
                    <a className="button is-success" onClick={okClick}>
                        Yes
                    </a>
                    <a className="button" onClick={cancelClick}>
                        Cancel
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default Modal;
