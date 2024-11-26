# Repro for issue 7993

## Versions

firebase-tools: v13.27.0<br>
node: v20.16.0

## Steps to reproduce

1. Install dependencies
   - Run `cd functions`
   - Run `npm i`
   - Run `cd ../`
2. Run `firebase deploy --project PROJECT_ID`
   - Outputs:

```
$ firebase deploy --project PROJECT_ID

=== Deploying to 'PROJECT_ID'...

i  deploying functions
Running command: npm --prefix "$RESOURCE_DIR" run lint

> lint
> eslint --ext .js,.ts .


/Users/<PATH>/issues/7993/functions/src/index.ts
  3:57  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any
  3:67  warning  Unexpected any. Specify a different type  @typescript-eslint/no-explicit-any

✖ 2 problems (0 errors, 2 warnings)

Running command: npm --prefix "$RESOURCE_DIR" run build

> build
> tsc

✔  functions: Finished running predeploy script.
i  functions: preparing codebase default for deployment
i  functions: ensuring required API cloudfunctions.googleapis.com is enabled...
i  functions: ensuring required API cloudbuild.googleapis.com is enabled...
i  artifactregistry: ensuring required API artifactregistry.googleapis.com is enabled...
✔  functions: required API cloudbuild.googleapis.com is enabled
✔  artifactregistry: required API artifactregistry.googleapis.com is enabled
✔  functions: required API cloudfunctions.googleapis.com is enabled
i  functions: Loading and analyzing source code for codebase default to determine what to deploy
Serving at port 8721

i  extensions: ensuring required API firebaseextensions.googleapis.com is enabled...
✔  extensions: required API firebaseextensions.googleapis.com is enabled
i  functions: preparing functions directory for uploading...
i  functions: packaged /Users/<PATH>/issues/7993/functions (56.76 KB) for uploading
i  functions: ensuring required API run.googleapis.com is enabled...
i  functions: ensuring required API eventarc.googleapis.com is enabled...
i  functions: ensuring required API pubsub.googleapis.com is enabled...
i  functions: ensuring required API storage.googleapis.com is enabled...
✔  functions: required API storage.googleapis.com is enabled
✔  functions: required API eventarc.googleapis.com is enabled
✔  functions: required API run.googleapis.com is enabled
✔  functions: required API pubsub.googleapis.com is enabled
i  functions: generating the service identity for pubsub.googleapis.com...
i  functions: generating the service identity for eventarc.googleapis.com...
✔  functions: functions folder uploaded successfully
i  functions: creating Node.js 20 (2nd Gen) function helloworldworld(us-central1)...
✔  functions[helloworldworld(us-central1)] Successful create operation.
Function URL (helloworldworld(us-central1)): https://us-central1-PROJECT_ID.cloudfunctions.net/helloworldworld
i  functions: cleaning up build files...
⚠  functions: Unhandled error cleaning up build images. This could result in a small monthly bill if not corrected. You can attempt to delete these images by redeploying or you can delete them manually at https://console.cloud.google.com/gcr/images/PROJECT_ID/us/gcf

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/PROJECT_ID/overview
```
