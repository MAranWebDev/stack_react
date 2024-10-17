import { DefaultLocale } from '@/libs/i18next/i18n';

export const es: DefaultLocale = {
  language: 'Idioma',
  settings: 'Configuración',
  mode: 'Modo',
  name: 'Nombre',
  table: 'Tabla',
  counter: 'Contador',
  amount: 'Cantidad',
  sample: 'Muestra',
  home: 'Inicio',
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
    cancel: 'Cancelar',
    edit: 'Editar',
    update: 'Actualizar',
  },
  messages: {
    unauthorized: 'Sin autorización',
    noData: 'Sin datos',
    notFound: 'No encontrado',
    confirmation: 'Está seguro de querer continuar?',
    warningCreate: 'Advertencia: Esta acción creará un nuevo registro.',
    warningDelete:
      'Advertencia: Esta acción eliminará el registro permanentemente.',
  },
};
