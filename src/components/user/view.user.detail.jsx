import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {

    const { isModalDetailOpen, setIsModalDetailOpen, dataUserDetail, setDataUserDetail } = props;

    const onClose = () => {
        setDataUserDetail(null);
        setIsModalDetailOpen(false);
    };

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
                <div>
                    <img height={150} width={200} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUserDetail.avatar}`} alt="" />
                </div>
                <div>
                    <label htmlFor="btnUpload" style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "orange",
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}>Upload Avatar</label>
                    <input type="file" hidden id="btnUpload" />
                </div>
                {/* <div><Button type="primary">Upload Avatar</Button></div> */}
            </div>
                :
                <div></div>
            }
        </Drawer>
    )
}

export default ViewUserDetail;