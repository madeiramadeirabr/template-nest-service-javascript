protoc \
  --include_imports \
  --include_source_info \
  --proto_path=/googleapis \
  --proto_path=/googleapis/google/api \
  --proto_path=. \
  --descriptor_set_out=api_descriptor.pb \
  --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./src/health src/health/health.proto \
  --ts_proto_opt=outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false
