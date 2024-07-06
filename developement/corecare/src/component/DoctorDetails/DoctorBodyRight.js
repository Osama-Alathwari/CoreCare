import { MdOutlineReceiptLong } from "react-icons/md";
import DoctorNavContainer from "./DoctorNavContainer";
import MediCondiContainer from "./MediCondiContainer";
import SharedRecords from "./SharedRecords";
import Prescription from "./Prescription";
import { FaFileLines, FaFilePrescription, FaRegFileLines, FaXRay } from "react-icons/fa6";
import { useState } from "react";
import Diagnosis from "./Diagnosis";
import Radiology from "./Radiology";
import LabTest from "./LabTest";
import UpdateHealthInfo from "../healthproviderdetails/UpdateHealthInfo";
import FileLaboratoryTable from "../healthproviderdetails/FileLaboratoryTable";
import FileRadiologyTable from "../healthproviderdetails/FileRadiologyTable";
import FilePharmacyTable from "../healthproviderdetails/FilePharmacyTable";

function DoctorBodyRight(props) {
    const [active, setActive] = useState(
        props.userType==="Doctor" ? 'records':
        props.userType==="Pharmacy" ? 'pharmacy':
        props.userType==="Hospital" ? 'laboratory':
        props.userType==="Laboratory" ? 'laboratory':
        props.userType==="Radiology" ? 'radiology': null
    );

    const handleRecordslClick = () => {
        setActive('records');
    }

    const handleDiagnosisClick = () => {
        setActive('diagnosis');
    }

    const handleLabClick = () => {
        setActive('lab');
    }

    const handleXrayClick = () => {
        setActive('xray');
    }

    const handlePrescriptionClick = () => {
        setActive('prescription');
    }
    // ================================
    const handleLaboratoryClick = () => {
        setActive('laboratory');
    }
    // ================================
    const handleRadiologyClick = () => {
        setActive('radiology');
    }
    // ================================
    const handlePharmacyClick = () => {
        setActive('pharmacy');
    }

    const handleUpdateClick = () => {
        setActive('update');
    }
    // ================================

    const allRecords = {
        firstRow: {
            "id": 1,
            "fav": true,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Report",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        secondRow: {
            "id": 2,
            "fav": true,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Ray",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        thirdRow: {
            "id": 3,
            "Name Of Record": "oooooooooooooooooooooooooooo",
            "Type": "Summary",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        fourthRow: {
            "id": 4,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Ray",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        fifthRow: {
            "id": 5,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Lab test",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        sixRow: {
            "id": 6,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Prescripation",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        sevenRow: {
            "id": 7,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Ray",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        eightRow: {
            "id": 8,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Ray",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        nineRow: {
            "id": 9,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Ray",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        tenRow: {
            "id": 10,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Ray",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        elevRow: {
            "id": 11,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Ray",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
        twelRow: {
            "id": 12,
            "Name Of Record": "Report-12 of patient's heart.form",
            "Type": "Ray",
            "Name Of Health Provider": "Dr : Ahmed Fahed Al-mojahed",
            "Date Of Upload": "22/5/2024"
        },
    }
    const icons = {
        "Report": <MdOutlineReceiptLong />,
        "Summary": <FaRegFileLines />,
        "Ray": <FaXRay />,
        "Prescripation": <FaFilePrescription />,
        "Lab test": <FaFileLines />
    };

    const Result = Object.keys(allRecords).length;
    const RecordsResult = "Showing " + Result + " Records Result";

    return (
        <div className="flex flex-col w-full">

            <MediCondiContainer />

            <DoctorNavContainer
                userType={props.userType}
                active={active}
                handleRecordslClick={handleRecordslClick}
                handleDiagnosisClick={handleDiagnosisClick}
                handleLabClick={handleLabClick}
                handleXrayClick={handleXrayClick}
                handlePrescriptionClick={handlePrescriptionClick}
                handleLaboratoryClick={handleLaboratoryClick}
                handleRadiologyClick={handleRadiologyClick}
                handlePharmacyClick={handlePharmacyClick}
                handleUpdateClick={handleUpdateClick}
            />
            
            {active === 'records' ?
                <SharedRecords
                    RecordsResult={RecordsResult}
                    icons={icons}
                    allRecords={allRecords}
                />
                : active === 'diagnosis' ? <Diagnosis
                    handleLabClick={handleLabClick}
                    handleXrayClick={handleXrayClick}
                    handlePrescriptionClick={handlePrescriptionClick}
                />
                    : active === 'lab' ? <LabTest handleDiagnosisClick={handleDiagnosisClick} />
                        : active === 'xray' ? <Radiology handleDiagnosisClick={handleDiagnosisClick} />
                            : active === 'prescription' ? <Prescription handleDiagnosisClick={handleDiagnosisClick} />
                                : active === 'laboratory' ? <FileLaboratoryTable
                                    RecordsResult={RecordsResult}
                                    icons={icons}
                                    allRecords={allRecords}
                                />
                                    : active === 'radiology' ? <FileRadiologyTable
                                        RecordsResult={RecordsResult}
                                        icons={icons}
                                        allRecords={allRecords}
                                    />
                                        : active === 'pharmacy' ? <FilePharmacyTable
                                            RecordsResult={RecordsResult}
                                            icons={icons}
                                            allRecords={allRecords}
                                        />
                                    : active === 'update' ? <UpdateHealthInfo handleUpdateClick={handleUpdateClick} />
                                        : null
            }
        </div>
    );
}

export default DoctorBodyRight