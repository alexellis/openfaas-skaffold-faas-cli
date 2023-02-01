## Build and deploy an OpenFaaS function via faas-cli using skaffold

skaffold provides a dev/test loop similar to `faas-cli local-run`.

Usage with OpenFaaS Community Edition (CE):

* Install Skaffold
* Install faas-cli, then run `faas-cli template pull` to download the Node16 template.
* Run `skaffold dev`

Known issues:

1. Skaffold requires a Kubernetes YAML file, even if faas-cli deploy doesn't use it, so an unnecessary deployment is deployed with zero replicas set to get around this limitation. 
2. Skaffold requires "IMAGE" to be the input for building a container image, but "SKAFFOLD_IMAGE" for deploying it, so this is switched out with sed in a temporary stack.yml file.
