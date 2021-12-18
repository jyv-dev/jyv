import React, { useState } from "react"
import { Link } from "gatsby"
import Grid from "@mui/material/Grid"

import Layout from "../components/layout"
import UploadArea from "../components/create-page/uploadArea"
import VideoDetails from "../components/create-page/videoDetails"

const Create = () => {
  const [caption, setCaption] = useState("")
  const [description, setDescription] = useState("")
  const [coverImage, setCoverImage] = useState([])
  const [access, setAccess] = useState("")
  const [playlist, setPlaylist] = useState("")
  const [isMainVideo, setIsMainVideo] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [file, setFile] = useState([])

  // const handleSubmitMessage = async () => {

  //   const canSend = await props.fetchInquiryOwnershipData();
  //   if (canSend) {
  //     const uploadFiles = files.map((f) => {
  //       return { filename: f.name, mimeType: f.type };
  //     });
  //     const data = {
  //       inquiry_id: props.inquiryId,
  //       message: newMessage,
  //       is_union_created: true,
  //       is_pilot_created: false,
  //       created_by_id: props.pilotId,
  //       attachments: uploadFiles,
  //     };
  //     setIsSendingMessage(true);
  //     const resp = await API.createInquiryMessage(data);

  //     if (!!resp.data?.inquiry_message_attachments) {
  //       await uploadToS3(resp.data.inquiry_message_attachments);
  //     }

  //     const messagesResponse = await API.getAllInquiryMessagesById({ inquiry_id: props.inquiryId });
  //     const formattedMessages = messagesResponse.data.map(formatInquiryMessage);
  //     const messagesGroupedByDate = groupBy(formattedMessages);

  //     setMessagesByDate(messagesGroupedByDate);
  //     setFiles([]);
  //     setNewMessage('');
  //     setIsSendingMessage(false);
  //   }
  // };

  // const uploadToS3 = async (attachments) => {
  //   await Promise.all(
  //     attachments.map(async (a) => {
  //       const file = files.find((f) => f.name === a.original_filename);
  //       let resp; // THIS IS A CHANGE
  //       try {
  //         resp = await axios.request({
  //           // THIS IS A CHANGE
  //           method: 'put',
  //           url: a.upload_url,
  //           data: file,
  //           headers: {
  //             'Content-Type': file.type,
  //           },
  //         });
  //       } catch (e) {
  //         Bugsnag.notify(e, function (event) {
  //           // THIS IS A CHANGE
  //           event.addMetadata('details', {
  //             inquiry_message_attachment_id: a?.id,
  //             s3_key: a?.s3_key,
  //             file,
  //             upload_url: a?.upload_url,
  //           });
  //         });
  //         throw e; // THIS IS A CHANGE
  //       }
  //       return resp; // THIS IS A CHANGE
  //     }),
  //   );

  //   return;
  // };
  // TODO: Define a render function to display the vidoe once its uploaded or editing previously uploaded content
  return (
    <Layout>
      <div
        className="page"
        style={{
          backgroundColor: "#f7f8f9",
          paddingLeft: 100,
          paddingRight: 100,
          paddingTop: 20,
        }}
      >
        <Grid
          container
          direction="column"
          className="create-page-container"
          style={{
            padding: 30,
            backgroundColor: "white",
          }}
        >
          <Grid item style={{ marginBottom: 5 }}>
            Upload Video
          </Grid>
          <Grid item style={{ marginBottom: 15 }}>
            Post a video to your account
          </Grid>
          <Grid container direction="row">
            <UploadArea file={file} setFile={setFile}/>
            <VideoDetails
              setDescription={setDescription}
              setCaption={setCaption}
              setIsMainVideo={setIsMainVideo}
              setAccess={setAccess}
              setPlaylist={setPlaylist}
              description={description}
              caption={caption}
              isMainVideo={isMainVideo}
              access={access}
              playlist={playlist}
            />
          </Grid>
        </Grid>
      </div>
    </Layout>
  )
}

export default Create
