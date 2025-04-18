import { Suspense, ComponentType } from 'react';

const Loader = () => <div>loading...</div>;

const Loadable = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = (props: P) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

  return WrappedComponent;
};

export default Loadable;
