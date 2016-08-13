
cd ../../codeBase/WaveMaker-Studio-Enterprise/wavemaker-studio-saas/wavemaker-saas-server/
ant dev-build -Dwm_studio_build_type=local -Dproject.props.file=../../build-helpers/filters/saas-wmstudio-local.props

cd ../wavemaker-saas-client
ant prepare-client-side-files

set /P id=press enter:

set /P id=press enter: