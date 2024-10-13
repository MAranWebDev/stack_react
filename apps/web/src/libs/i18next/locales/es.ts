import en from './en.json';

// Types
type DefaultLocale = typeof en;

export const es: DefaultLocale = {
  language: 'Idioma',
  settings: 'Configuración',
  mode: 'Modo',
  name: 'Nombre',
  bears: 'Osos',
  themeModes: {
    light: 'Luz',
    dark: 'Oscuro',
    system: 'Sistema',
  },
  status: {
    label: 'Estado',
    open: 'Abierto',
    closed: 'Cerrado',
  },
  actions: {
    label: 'Acciones',
    accept: 'Aceptar',
    edit: 'Editar',
    cancel: 'Cancelar',
    clean: 'Limpiar',
  },
  messages: {
    unauthorized: 'Sin autorización',
    noData: 'Sin datos',
    notFound: 'No encontrado',
    confirmation: 'Estás seguro de querer continuar?',
    permanentDeleteWarning:
      'Advertencia: esta acción eliminará permanentemente el registro y no se puede deshacer.',
  },
};
