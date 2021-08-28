import { isMobile } from "react-device-detect";
import M from '@materializecss/materialize';
import { Button, Icon, Modal, Row, TextInput } from "react-materialize";

const ModalCollection = (props) => {
    console.log(props)
    return (
        <Modal
            id='confirmToFlag'
            open={props.openConfirmDialog}
            header='コメントを通報'
            bottomSheet={isMobile}
            fixedFooter={isMobile}
            dismissible={false}
            onClose={() => props.setOpenConfirmDialog(false)}
            actions={[
                <Button waves="light" className="orange" onClick={() => {
                    //
                }}><Icon left>link</Icon>IDからインポート</Button>,
                <Button flat waves="light" onClick={() => props.setOpenConfirmDialog(false)}>閉じる</Button>
            ]}
            bottomSheet={isMobile}>
            <p><img class="circle" src={props.user?.snippet?.thumbnails?.default?.url} width="30px" /> {props.user?.snippet?.title}としてコメントを通報します．よろしいですか？</p>
        </Modal>
    )
}

export default ModalCollection;