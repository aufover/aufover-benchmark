# dnf options
DNF_OPTS += --best --skip-broken

# read-only source directory
TESTDIR ?= ./tests

# read-write working directory
WORKDIR ?= ./workdir

.PHONY: check configure install-deps test

# default target
configure: $(WORKDIR)
	cmake -S $(TESTDIR) -B $(WORKDIR) $(CMAKE_OPTS)

check: configure
	$(MAKE) $@ -C $(WORKDIR)

test: configure
	$(MAKE) $@ -C $(WORKDIR)

# create $(WORKDIR) if it does not exist already
$(WORKDIR):
	mkdir -p $@

install-deps:
	# needless to install make as nobody would ever run this without make
	sudo dnf install $(DNF_OPTS) cbmc cbmc-utils clang cmake coreutils cppcheck \
		csdiff diffutils divine gcc predator symbiotic zsh
