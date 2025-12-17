const mongoose = required("mongoose");

const providerSchema = new mongoose.providerSchema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    servicesOffered: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "service"
    },
    rating:{
        type: Number,
        default: 0,
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "review",
    },
    availableSlots: [
        {
            data: String,
            time: String,
        },
    ],
    isApproved: {
        type: Boolean,
        default: fasle,
    },

},
{timestamp: true}
);

module.exports = mongoose.model("provider", providerSchema);