import { Drawer } from "antd";

const ViewUserDetail = (props) => {

    const { isModalDetailOpen, setIsModalDetailOpen, dataUserDetail, setDataUserDetail } = props;

    const onClose = () => {
        setDataUserDetail(null);
        setIsModalDetailOpen(false);
    };

    return (
        <Drawer
            title="User Detail"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={onClose}
            open={isModalDetailOpen}
        >
            <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
                <p>ID: {dataUserDetail ? dataUserDetail._id : ""}</p>
                <p>Full Name: {dataUserDetail ? dataUserDetail.fullName : ""}</p>
                <p>Email: {dataUserDetail ? dataUserDetail.email : ""}</p>
                <p>Phone: {dataUserDetail ? dataUserDetail.phone : ""}</p>
            </div>
        </Drawer>
    )
}

export default ViewUserDetail;