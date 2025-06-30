import { Button, Drawer } from "antd";
import { useState } from "react";

const ViewUserDetail = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const { isModalDetailOpen, setIsModalDetailOpen, dataUserDetail, setDataUserDetail } = props;

    const onClose = () => {
        setDataUserDetail(null);
        setIsModalDetailOpen(false);
    };

    const hanldeOnchangeFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return
        }

        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    return (
        <Drawer
            width={"30vw"}
            title="User Detail"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            open={isModalDetailOpen}
        >
            {dataUserDetail ? <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                <p>ID:{dataUserDetail._id}</p>
                <p>Full Name: {dataUserDetail.fullName}</p>
                <p>Email: {dataUserDetail.email}</p>
                <p>Phone: {dataUserDetail.phone}</p>
                <p>Avatar:</p>
                <div style={{ height: "100px", width: "150px", border: "1px solid #ccc" }}>
                    <img style={{ height: "100%", width: "100%", objectFit: "contain" }} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUserDetail.avatar}`} alt="" />
                </div>
                <div>
                    <label htmlFor="btnUpload" style={{
                        display: "block",
                        width: "fit-content",
                        padding: "5px 10px",
                        background: "orange",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Upload Avatar</label>
                    <input
                        onChange={(event) => { hanldeOnchangeFile(event) }}
                        type="file" hidden id="btnUpload" />
                </div>
                {preview && <div style={{ height: "100px", width: "150px", border: "1px solid #ccc" }}>
                    <img style={{ height: "100%", width: "100%", objectFit: "contain" }}
                        src={preview} alt="" />
                </div>}
            </div>
                :
                <div></div>
            }
        </Drawer>
    )
}

export default ViewUserDetail;