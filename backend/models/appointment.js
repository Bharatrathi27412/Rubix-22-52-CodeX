const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    doctorId: {
        type: String,
        required: true,
        ref: 'Doctor',
    },
    date: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "Pending",
    },
    report: {
        type: String,
        default: "",
        required: false
    }
});

module.exports = Appointment = mongoose.model("Appointment", appointmentSchema);
