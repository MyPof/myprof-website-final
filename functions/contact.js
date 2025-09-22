exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Méthode non autorisée' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Tous les champs sont requis' })
      };
    }

    console.log('Message reçu:', { name, email, message });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message reçu avec succès!' 
      })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erreur interne du serveur' })
    };
  }
};