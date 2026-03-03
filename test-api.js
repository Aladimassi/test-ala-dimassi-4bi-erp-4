// Test pour vérifier la conversion des IDs
fetch('http://localhost:3000/jardins/1')
  .then(res => res.json())
  .then(data => {
    console.log('Données brutes de l\'API:', data);
    console.log('Type de l\'ID:', typeof data.id);
    console.log('ID:', data.id);
    
    // Conversion comme dans le service
    const converted = {
      ...data,
      id: typeof data.id === 'string' ? parseInt(data.id) : data.id
    };
    console.log('Après conversion:', converted);
    console.log('Type de l\'ID après conversion:', typeof converted.id);
  })
  .catch(err => console.error('Erreur:', err));
