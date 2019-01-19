function colorMap(action) {
  switch (action) {
    case 'Create-Unit':
      return '#33a02c';
    case 'Branch-Unit':
      return '#e31a1c';
    case 'Unpin-Unit':
      return '#8c510a';
    case 'Pin-Unit':
      return '#ffd238';
    case 'Brush-PCP-Axis':
      return '#b3cde3';
    case 'Brush-SCM-Axis':
      return '#ccebc5';
    case 'Brush-SP-Axis':
      return '#fbb4ae';
    case 'Change-PCP-Column':
      return '#1f78b4';
    case 'Create-Unit-Annotation':
      return '#984ea3';
    case 'Search-Table':
      return '#777777';
    case 'Search-Table-Row':
      return '#c9c9c9';
  }
}