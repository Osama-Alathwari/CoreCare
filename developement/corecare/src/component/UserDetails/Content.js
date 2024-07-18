import "../../css/UserPageStyle/content.css"
import Profile from "./Profile";
import PatientAccessManagement from "./PatientAccessManagement"
import RecordesPage from "../../pages/RecordesPage"
import PatientSettingPage from "../../pages/PatientSettingPage";
import AddAccount from "../hospitaldetails/AddAccount";
import AddLaboratoryAccount from "../hospitaldetails/AddLaboratoryAccount";
import AddDoctorAccount from "../hospitaldetails/AddDoctorAccount";
import AddRadiologyAccount from "../hospitaldetails/AddRadiologyAccount";
import AddPharmacyAccount from "../hospitaldetails/AddPharmacyAccount";
import EmergencyAccess from "./EmergecyAccess";


function Content(props) {

    return (
        <>
            <div className="contentContainer">
                {
                    props.active === "Profile" ? <Profile userType={props.userType} />
                        : props.active === "All Records" ? <RecordesPage title={props.active} handleCreateAccessKeyClick={props.handleCreateAccessKeyClick} />
                            : props.active === "Report" ? <RecordesPage title={props.active} handleCreateAccessKeyClick={props.handleCreateAccessKeyClick} />
                                : props.active === "Lab test" ? <RecordesPage title={props.active} handleCreateAccessKeyClick={props.handleCreateAccessKeyClick} />
                                    : props.active === "Radiology" ? <RecordesPage title={props.active} handleCreateAccessKeyClick={props.handleCreateAccessKeyClick} />
                                        : props.active === "Prescription" ? <RecordesPage title={props.active} handleCreateAccessKeyClick={props.handleCreateAccessKeyClick} />
                                            : props.active === "Summarized Files" ? <RecordesPage title={props.active} handleCreateAccessKeyClick={props.handleCreateAccessKeyClick} />
                                                : props.active === "Add Patient" ? <AddAccount userType={props.userType} title={props.active} />
                                                    : props.active === "Add Doctor" ? <AddDoctorAccount userType={props.userType} title={props.active} />
                                                        : props.active === "Add Laboratory" ? <AddLaboratoryAccount userType={props.userType} title={props.active} />
                                                            : props.active === "Add Radiology" ? <AddRadiologyAccount userType={props.userType} title={props.active} />
                                                                : props.active === "Add Pharmacy" ? <AddPharmacyAccount userType={props.userType} title={props.active} />
                                                                    : props.active === "Patient Access Management" ? <PatientAccessManagement />
                                                                        : props.active === "Appointment Schedule" ? <div className="text-white">Appointment</div>
                                                                            : props.active === "Emergency Access" ? <EmergencyAccess userType={props.userType} handleCreateAccessKeyClick={props.handleCreateAccessKeyClick} />
                                                                                : props.active === "Settings" ? <PatientSettingPage userType={props.userType} />
                                                                                    : null
                }
            </div>
        </>

    );
}

export default Content;