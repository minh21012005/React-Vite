import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { updateUserApi } from "../../services/api.service";


const UpdateUserModal = (props) => {
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])

    const handleOk = () => {
        handleUpdateUser();
        handleClearData();
        setIsModalUpdateOpen(false);
    };
    const handleCancel = () => {
        setDataUpdate(null);
        handleClearData();
        setIsModalUpdateOpen(false);
    };

    const handleClearData = () => {
        setFullName("");
        setId("");
        setPhone("");
    }

    const handleUpdateUser = async () => {
        const res = await updateUserApi(id, fullName, phone);
        if (res.data) {
            notification.success({
                message: 'Update user',
                description: 'Cập nhật user thành công'
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
            open={isModalUpdateOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            okText={'UPDATE'}
        >
            <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                <div>
                    <span>ID</span>
                    <Input value={id} disabled onChange={(event) => { setId(event.target.value) }} />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
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