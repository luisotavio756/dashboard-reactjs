import React, {useCallback, useState} from 'react'
import { useDropzone } from 'react-dropzone'
import { Dropzone as DropBackground } from './styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Profile from '~/assets/img/default-profile.jpg';

const Dropzone = ({file, onFileUploaded }) => {

    const [selectedFiles, setSelectedFiles] = useState('');
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(file);

        setSelectedFiles(fileUrl);
        onFileUploaded(file);

    }, [onFileUploaded])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: 'image/*'
    })

    return (
        <DropBackground  {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
        {/* {
            isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        } */}
            { selectedFiles || file
                ?
                <div className="image">
                    <img src={!selectedFiles ? `${process.env.REACT_APP_API_URL}/uploads/business/${file}` : selectedFiles
                    } alt="Point File" />
                    <span><FontAwesomeIcon icon={faPencilAlt} /> Alterar</span>
                </div>
                :
                <div className="image-default">
                    <img src={Profile} alt="Point File" />
                    <span><FontAwesomeIcon icon={faUpload} /> Carregar</span>
                </div>
            }

        </DropBackground>
    )
}

export default Dropzone;
