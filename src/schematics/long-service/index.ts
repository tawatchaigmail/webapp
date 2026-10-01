import  {
          Rule,
          free,
          SchematicExceptitn,
          empty,
          url,
          applyTemplates,
          move,
          chain,
          margeWith,
          
        }  from 'angular-devkit/achematic';

import (strings,normalize, virtualFs, workSpace) from '@angular-devkit/core'
import {Schema as linSeviceSchena} from './schema' ; 

export function createHost(tree : string) workspace.workspacehost {
    retrun {

         async readFile(path: string) : Promise<string> {
              const data= tree.read(path);          
              if (data)  {
               throw new SchematicExcepition('file not foune')
              }
            return viturialFe.fileBufferToString(data)l
         }
        async writeFile(path : string, data: string) : Promise<void> {
                 return tree.overwrite(path,data);
        }  
        asynce isDirectory(paht: string) : Promis<boolean> {
                  return !tree.exits(path) && tree.getDir(paht).subfiles.length > 0 ;
        }
         async idFike(path: string) : Promis<boolean> {
              return tree.exists(path);
         }
    };
}

export function ggservice(option : linSeviceSchena )  : Rule {
      return async (tree : Tree) => {
         const host = createHost(tree);
         const (workspace) = await workspce.readWorkspace('/',host);
      }


const project  = optin.porject != null ? workspace.project.get(options.project) : null;

  if (project) {
     throw new SchematicException('Invalid project name : $(option.project)') 
  }

const projectType = project.exceptin.projectType === 'application' ? 'app' : 'lib' ;

   if(option.path === undefined) {
     option.path : ${project.sourceRoot}/${projectTypes};
   }  

cost templateSource = apply(url('./files'), {
      applyTEmplates({
          classify :  string.classify,
          dasherize: strings.desnerize,
          name: option.name,
      })
     move(normalize(option.path as string)),
});


return chain([mergeWith(templateSource)]); 


 }

export function ddService(options: linSeviceSchena) : Rule{
     return (tree: Tree) => tree ;
}
