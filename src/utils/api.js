async function callApi(method, endpoint, data = null) {
  try {
    if (!method) {
      throw new Error(`Méthode non spécifiée. Données : ${data ? JSON.stringify(data) : 'aucune'}`);
    }

    if (!endpoint) {
      throw new Error(`Endpoint manquant. Méthode : ${method}, Données : ${data ? JSON.stringify(data) : 'aucune'}`);
    }

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(endpoint, options);

    if (!response.ok) {
      const message = `Erreur HTTP pour ${method} ${endpoint} : ${
        data ? JSON.stringify(data) : 'Aucune donnée renseignée'
        }. Détail : ${response.statusText ? response.statusText + ' - ' : ''}${response.status}`;
      throw new Error(message);
    }

    const res = await response.json();
    console.log(`${method} réussi :`, res);
    return res;

  } catch (error) {
    console.error(error.message);
    alert(`${method} ${endpoint} échoué pour l'objet : ${data ? JSON.stringify(data) : 'aucune donnée'}`);
  }
}

export default callApi;