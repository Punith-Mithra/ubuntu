cd ../..
cd codeBase/WaveMaker-Studio-Enterprise/
mvn -Pwmstudio-local clean install -DskipTests -Dproject.props.file=../../build-helpers/filters/saas-wmstudio-local.props
