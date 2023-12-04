import { Config } from '@stencil/core';

import {angularOutputTarget} from '@stencil/angular-output-target';
import {reactOutputTarget} from '@stencil/react-output-target';
import {vueOutputTarget} from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'stencil',
  extras:{ enableImportInjection: true },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angularOutputTarget({
      componentCorePackage:'@workspace/stencil',
      directivesProxyFile: '../../packages/angular/libs/stencil-wrapper/src/lib/proxy.ts',
      directivesArrayFile: '../../packages/angular/libs/stencil-wrapper/src/lib/index.ts'
    }),
    reactOutputTarget({
      componentCorePackage: '@workspace/stencil',
      proxiesFile: '../../packages/react/lib/components/stencil-generated/index.ts'
    }),
    vueOutputTarget({
      componentCorePackage: '@workspace/stencil',
      proxiesFile: '../../packages/vue/lib/components.ts'
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
