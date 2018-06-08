const modalAction = {
	UPDATE_STATUS: 'UPDATE_STATUS',

	updateStatus: (status) => {
		return (dispatch) => {
			//   const notes = getState().Notes.notes;
			//   const seectedColor = notes[notes.findIndex(note => note.id === id)].color;
			dispatch({
				type: modalAction.UPDATE_STATUS,
				showModal: status,
			});
		};
	},


};
export default modalAction;