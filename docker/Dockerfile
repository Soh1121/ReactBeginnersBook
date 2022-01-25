FROM ubuntu

RUN apt update \
	&& apt -y upgrade \
	&& apt install -y git curl

# install anyenv
RUN git clone https://github.com/anyenv/anyenv ~/.anyenv \
	&& echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bash_profile \
	&& echo 'eval "$(anyenv init -)"' >> ~/.bash_profile \
	&& anyenv install --force-init

# install nodenv
RUN anyenv install nodenv

# install plugins
RUN mkdir -p $(anyenv root)/pulugins \
	&& git clone https://github.com/znz/anyenv-update.git $(anyenv root)/plugins/anyenv-update \
	&& mkdir -p "$(nodenv root)"/plugins \
	&& git clone https://github.com/nodenv/nodenv-default-packages.git "$(nodenv root)/plugins/nodenv-default-packages"
COPY ./default-packages $(nodenv root)

# install node.js
RUN nodenv install 14.4.0 \
	&& nodenv global 14.4.0
