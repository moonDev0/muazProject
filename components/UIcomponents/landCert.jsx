// import useCurrentCertStore from '@/store/currentCertStore';
// import React from 'react';

// const LandOwnershipCertificate = ({ mode, rowData, handleChange, actionLoading, closeModal}) => {
//     const { currentCert,savecurrentCert } = useCurrentCertStore();
//     const formatDate = (date) => {
//         return date.toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//         });
//     };
//     const today = new Date();
//     return (
//         <div className="container mx-auto p-6 text-black">
//             <div className="border border-gray-300 p-6 rounded-lg shadow-lg">
//                 <h1 className="text-3xl font-bold text-center mb-4">Land Ownership Certificate</h1>
//                 <p className="text-sm text-gray-600 text-center mb-2">
//                     Certificate No: <strong>{currentCert?.uid}</strong>
//                 </p>
//                 <p className="text-sm text-gray-600 text-center mb-4">
//                     Date of Issue: <strong>{formatDate(today)} </strong>
//                 </p>
//                 <p className="text-sm text-gray-600 text-center mb-4">
//                     Issued by: <strong>LRS</strong>
//                 </p>
//                 <p className="text-sm text-gray-600 text-center mb-4">
//                     Location: <strong>{currentCert?.address}</strong>
//                 </p>

//                 <div className=' grid grid-cols-2 gap-10 container mx-auto'>
                
//                     <div>
//                         <h2 className="text-2xl font-semibold mt-6 mb-2">Owner's Details</h2>
//                         <p><strong>Owner's Name:</strong> {currentCert?.fullName}</p>
//                         <p><strong>Address:</strong> {currentCert?.address}</p>
//                         <p><strong>Phone Number:</strong> {currentCert?.phoneNumber}</p>
//                         <p><strong>Email:</strong>{currentCert?.email}</p>
//                         <p><strong>NIN:</strong>{currentCert?.ninNumber}</p>
//                     </div>

//                     <div>
//                         <h2 className="text-2xl font-semibold mt-6 mb-2">Land Description</h2>
//                         <p><strong>Location:</strong> {currentCert?.address}</p>
//                         <p><strong>Plot Number:</strong> {currentCert?.uid}</p>
//                         <p><strong>Size:</strong> [Size of the Land]</p>
//                         <p><strong>Coordinates:</strong> Latitude: {currentCert?.latitude}, Longitude: {currentCert?.longitude}</p>
//                     </div>
//                 </div>
                
               
              
                
//                 <h2 className="text-2xl font-semibold mt-6 mb-2">Purpose of the Land</h2>
//                 <p>[Specify Purpose]</p>
                
//                 <h2 className="text-2xl font-semibold mt-6 mb-2">Ownership Details</h2>
//                 <p>This certificate confirms that the above-mentioned individual has complete ownership rights to the aforementioned land, as per the records maintained by [Issuing Authority]. The ownership is free from any encumbrances, claims, or disputes, unless otherwise stated.</p>
                
//                 <h2 className="text-2xl font-semibold mt-6 mb-2">Conditions</h2>
//                 <p>This certificate is valid for all legal purposes and can be presented as proof of ownership. Any transfer of ownership must be conducted according to the applicable laws and regulations.</p>
                
//                 <div className="mt-8">
//                     <p className="text-center">__________________________</p>
//                     <p className="text-center">[Name of the Authorized Person]</p>
//                     <p className="text-center">[Title]</p>
//                     <p className="text-center">[Issuing Authority]</p>
//                     <p className="text-center">[Contact Information]</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LandOwnershipCertificate;
import useCurrentCertStore from '@/store/currentCertStore';
import React from 'react';

const LandOwnershipCertificate = ({ mode, rowData, handleChange, actionLoading, closeModal }) => {
    const { currentCert, savecurrentCert } = useCurrentCertStore();
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
    const today = new Date();
    
    return (
        <div className="container mx-auto font-KumbhSan p-6 text-black">
            <div className="border border-gray-400 bg-white p-6 rounded-lg shadow-lg relative">
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 rounded-t-lg"></div>
                <h1 className="text-3xl font-bold text-center mb-4 text-blue-800">Land Ownership Certificate</h1>
                <p className="text-sm text-gray-600 text-center mb-2">
                    Certificate No: <strong>{currentCert?.uid}</strong>
                </p>
                <p className="text-sm text-gray-600 text-center mb-4">
                    Date of Issue: <strong>{formatDate(today)} </strong>
                </p>
                <p className="text-sm text-gray-600 text-center mb-4">
                    Issued by: <strong>LRS</strong>
                </p>
                <p className="text-sm text-gray-600 text-center mb-4">
                    Location: <strong>{currentCert?.address}</strong>
                </p>

                <div className='grid grid-cols-2 gap-10 container mx-auto'>
                    <div>
                        <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Owner's Details</h2>
                        <p><strong>Owner's Name:</strong> {currentCert?.fullName}</p>
                        <p><strong>Address:</strong> {currentCert?.address}</p>
                        <p><strong>Phone Number:</strong> {currentCert?.phoneNumber}</p>
                        <p><strong>Email:</strong> {currentCert?.email}</p>
                        <p><strong>NIN:</strong> {currentCert?.ninNumber}</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Land Description</h2>
                        <p><strong>Location:</strong> {currentCert?.address}</p>
                        <p><strong>Plot Number:</strong> {currentCert?.uid}</p>
                        <p><strong>Size:</strong> [Size of the Land]</p>
                        <p><strong>Coordinates:</strong> Latitude: {currentCert?.latitude}, Longitude: {currentCert?.longitude}</p>
                    </div>
                </div>

                <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Purpose of the Land</h2>
                <p>[Specify Purpose]</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Ownership Details</h2>
                <p>This certificate confirms that the above-mentioned individual has complete ownership rights to the aforementioned land, as per the records maintained by [Issuing Authority]. The ownership is free from any encumbrances, claims, or disputes, unless otherwise stated.</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-2 text-blue-600">Conditions</h2>
                <p>This certificate is valid for all legal purposes and can be presented as proof of ownership. Any transfer of ownership must be conducted according to the applicable laws and regulations.</p>
                
                <div className="mt-8">
                    <p className="text-center">__________________________</p>
                    <p className="text-center">[Name of the Authorized Person]</p>
                    <p className="text-center">[Title]</p>
                    <p className="text-center">[Issuing Authority]</p>
                    <p className="text-center">[Contact Information]</p>
                </div>
            </div>
        </div>
    );
};

export default LandOwnershipCertificate;
