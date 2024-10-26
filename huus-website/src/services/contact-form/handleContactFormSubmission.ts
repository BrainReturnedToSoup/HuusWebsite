import { store, selectors } from "../../state/store"


export default function handleContactFormSubmission_binded() {
    return handleContactFormSubmission(store, selectors);
}

function handleContactFormSubmission (state, selectors) {

}