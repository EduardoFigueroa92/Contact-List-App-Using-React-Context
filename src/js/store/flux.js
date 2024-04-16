const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/AgendaEdu/contacts")
					.then(response => response.json)
					.then(data => console.log(data))
					.catch(error => console.log(error))

			},
			createAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/AgendaEdu",
					{
						method: "POST",
						header: { "Content-Type": "application/json" },
						
					})
					.then(response => response.json)
					.then(data => console.log(data))
					.catch(error => console.log(error))

			},
			createContacto: () => {
			fetch("https://playground.4geeks.com/contact/agendas/AgendaEdu/contacts",
			{
				method: "POST",
				header: { "Content-Type": "application/json" },
				body: JSON.stringify({
					"name": "Edu",
					"phone": "7348438344",
					"email": "feff@effd.cm",
					"address": "calee dduffhefhe"
				  })
			})
			.then(response => response.json)
			.then(data => console.log(data))
			.catch(error => console.log(error))
			
		}
	}
	};
};

export default getState;
