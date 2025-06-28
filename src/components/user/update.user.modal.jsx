import { useState } from "react";
import { Button, Input, notification, Modal } from "antd";
import { createUserApi } from "../../services/api.service";


const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        handleUpdateUser();
        handleClearData();
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        handleClearData();
        setIsModalOpen(false);
    };

    const handleClearData = () => {
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
    }

    const handleUpdateUser = async () => {
        const res = await createUserApi(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: 'Create user',
                description: 'Tạo user thành công'
            })
            await loadUser();
        } else {
            notification.error({
                message: 'Error Create user',
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <Modal title="Update User"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            okText={'UPDATE'}
        >
            <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                <div>
                    <span>Full Name</span>
                    <Input value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password value={password} onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>
            </div>
        </Modal>
    )
}
export default UpdateUserModal;