import eruda from 'eruda';

if (process.env.UMI_ENV !== 'prod' && process.env.NODE_ENV !== 'production') {
  const el = document.createElement('div');
  document.body.appendChild(el);

  eruda.init({
    container: el,
    tool: ['console', 'elements', 'network', 'Resources', 'info', 'Sources'],
  });
  console.log('process.env: ', process.env);
}

console.log('process', process, process.env.NODE_ENV);
