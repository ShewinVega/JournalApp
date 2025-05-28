import env from "../config/variables.config";
import { CloudImageInterface } from "../interfaces";

export const filesUpload = async (file: any) => {
  try {
    if (!file) throw new Error(`We dont have any file to upload!!!`);

    // Create formData
    const formData = new FormData();
    formData.append("upload_preset", env.bucketName); // we add the folder where we want to add the image
    formData.append("file", file); // we charge the image

    // Make the request
    const response = await fetch(env.cloudUrl, {
      method: "POST",
      body: formData,
    });

    // Check if everything is ok
    if (!response.ok) throw new Error("The image could not be uploaded!!!");
    const data: CloudImageInterface = await response.json();

    // return the necessary url for get the image in our web in order to save it in firestore;
    return data.secure_url;
  } catch (error) {
    console.log(`Error uploading images:  ${error}`);
    throw new Error(error.message);
  }
};
