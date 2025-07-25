const nodes = new vis.DataSet([
  { id: 'BIOCEL', label: 'Biología Celular\n(1°S)', group: '1' },
  { id: 'ANATO', label: 'Anatomía\n(1°S)', group: '1' },
  { id: 'QUIMICA', label: 'Química General\n(1°S)', group: '1' },
  { id: 'BIOQ', label: 'Bioquímica\n(2°S)', group: '2' },
  { id: 'HISTO', label: 'Histoembriología\n(2°S)', group: '2' },
  { id: 'FISIO', label: 'Fisiología\n(2°A)', group: '3' }
]);

const edges = new vis.DataSet([
  { from: 'BIOCEL', to: 'BIOQ' },
  { from: 'QUIMICA', to: 'BIOQ' },
  { from: 'BIOCEL', to: 'HISTO' },
  { from: 'ANATO', to: 'HISTO' },
  { from: 'BIOQ', to: 'FISIO' },
  { from: 'HISTO', to: 'FISIO' }
]);

const container = document.getElementById('malla');
const data = { nodes, edges };
const options = {
  layout: {
    hierarchical: {
      direction: 'UD',
      sortMethod: 'directed',
      nodeSpacing: 150,
      levelSeparation: 150
    }
  },
  nodes: {
    shape: 'box',
    margin: 10,
    font: { multi: 'html' }
  },
  physics: false,
  interaction: {
    hover: true,
    tooltipDelay: 100
  }
};

new vis.Network(container, data, options);
