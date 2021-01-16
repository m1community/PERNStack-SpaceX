import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { GetAvatarDocument, useAddAvatarMutation } from "../generated/graphql"


export const Upload: React.FC = () => {
    
    const [addAvatar] = useAddAvatarMutation({
        refetchQueries: [{
            query: GetAvatarDocument
        }]
    })

    const onDrop = useCallback(async(file) => {
        await addAvatar({
            variables: {file}
        })
    }, [addAvatar])
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the avatar here</p>
            ) : (
                <p>Drag and drop file or click here to add one</p>
            )}
        </div>
    )
}