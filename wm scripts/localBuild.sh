cd
cd codeBase/WaveMaker-Studio-Enterprise/wavemaker-studio-saas/wavemaker-saas-server/
ant dev-build -Dwm_studio_build_type=local -Dproject.props.file=../../build-helpers/filters/saas-wmstudio-local.props

echo '******************************* Colmpleted Local Server Build ***********************'

ant prepare-client-side-files

echo '******************************* Colmpleted Local client Build ***********************'

