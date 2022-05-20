# Información del proyecto
### API usada
[www.thedogapi.com](www.thedogapi.com)

Usé axios para conectar con la API

### Estructura
```
v src
  > actions
  > api
  v assets
    // styled-components
    > styles
  > components
  > containers
  > hooks
  > reducers
  > utils
```

### Patrones de diseño usados
* Containers (./containers)
* HOCs (ErrorBoundary)
* Style components (styled-components)
* State hoisting + Controlled input (BreedSelector)
* Lazy loading + Suspense